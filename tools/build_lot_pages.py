"""Build one static, crawlable page per lot (lot/<N>/index.html), a lots index,
sitemap.xml and robots.txt from js/fortunes.js, js/plain.js and js/whisper.js.
Run from the repo root:  python3 tools/build_lot_pages.py  (needs node)."""
import json, os, subprocess, html, datetime
SITE = "https://guanyinlove.vercel.app"
GA = """  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TW8PVXK9E2"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-TW8PVXK9E2');</script>"""
TONE = {"good": "Leans favorable", "mixed": "Good with patience", "careful": "Proceed with care"}
WORDS = "one two three four five six seven eight nine ten".split()

def load():
    js = r"""
const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);
for(const f of ['fortunes','plain','whisper'])vm.runInContext(fs.readFileSync('js/'+f+'.js','utf8').replace(/^const (\w+)/m,'var $1'),c);
process.stdout.write(JSON.stringify({f:c.FORTUNES_DB,p:c.PLAIN_DB,w:c.WHISPER_DB}));"""
    return json.loads(subprocess.check_output(["node", "-e", js]))

def esc(s): return html.escape(s, quote=True)
def lines(s): return "<br>".join(esc(x) for x in s.split("\n"))

CSS = """:root{--ink:#10110f;--paper:#f3eddf;--brass:#c8a96a;--mist:#c7c8bf;--cin:#c5533f}
*{box-sizing:border-box}body{margin:0;background:var(--ink);color:var(--paper);font-family:"Iowan Old Style","Palatino Linotype",Georgia,serif;line-height:1.65}
a{color:var(--brass)}main{max-width:720px;margin:0 auto;padding:32px 20px 64px}
header.top{display:flex;justify-content:space-between;align-items:center;max-width:720px;margin:0 auto;padding:18px 20px;font-family:Avenir,"Segoe UI",system-ui,sans-serif;font-size:14px}
header.top a{text-decoration:none}.brand{font-weight:700;letter-spacing:.04em}
.kicker{font-family:Avenir,"Segoe UI",system-ui,sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--mist)}
h1{font-size:34px;line-height:1.2;margin:8px 0 12px}h2{font-size:20px;color:var(--brass);margin-top:36px}
.tone{display:inline-block;border:1px solid var(--brass);border-radius:99px;padding:3px 12px;font-size:13px;font-family:Avenir,"Segoe UI",system-ui,sans-serif}
blockquote{margin:16px 0;padding:16px 20px;border-left:3px solid var(--cin);background:#171815;border-radius:8px}
.zh{font-size:20px;letter-spacing:.08em}.cta{margin-top:40px;padding:24px;border:1px solid rgba(225,201,141,.35);border-radius:16px;text-align:center}
.btn{display:inline-block;margin-top:10px;padding:12px 22px;background:var(--cin);color:#fff;border-radius:99px;text-decoration:none;font-family:Avenir,"Segoe UI",system-ui,sans-serif;font-weight:600}
nav.pn{display:flex;justify-content:space-between;margin-top:32px;font-family:Avenir,"Segoe UI",system-ui,sans-serif;font-size:14px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:0;list-style:none}
.grid a{display:block;padding:12px;border:1px solid rgba(225,201,141,.25);border-radius:12px;text-decoration:none}
.grid small{display:block;color:var(--mist);font-size:12px}
footer{max-width:720px;margin:0 auto;padding:24px 20px 48px;color:var(--mist);font-size:13px;font-family:Avenir,"Segoe UI",system-ui,sans-serif}"""

def page(title, desc, canonical, body, jsonld=None):
    ld = f'\n  <script type="application/ld+json">{json.dumps(jsonld, ensure_ascii=False)}</script>' if jsonld else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(desc)}">
  <link rel="canonical" href="{canonical}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Guanyin Love">
  <meta property="og:title" content="{esc(title)}">
  <meta property="og:description" content="{esc(desc)}">
  <meta property="og:url" content="{canonical}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <style>{CSS}</style>
{GA}{ld}
</head>
<body>
<header class="top"><a class="brand" href="/">Guanyin Love</a><a href="/lots/">All 100 lots</a></header>
<main>
{body}
</main>
<footer>For cultural appreciation and personal reflection only. Not medical, legal, financial or other professional advice. © Guanyin Love</footer>
</body>
</html>
"""

def main(zh):
    d = load(); F = {x["id"]: x for x in d["f"]}; P = d["p"]; W = d["w"]
    assert sorted(F) == list(range(1, 101)), "need all 100 lots"
    os.makedirs("lot", exist_ok=True); os.makedirs("lots", exist_ok=True)
    urls = [SITE + "/", SITE + "/lots/"]; items = []
    for n in range(1, 101):
        f = F[n]; p = P.get(str(n)) or {}; tone = TONE.get(p.get("tone", "mixed"))
        bl = p.get("bottomLine", f["meaning"])
        title = f"Guanyin Lot {n} Meaning – Plain-English Reading | Guanyin Love"
        desc = f"Guanyin oracle lot {n} in plain English: {bl}"[:158]
        can = f"{SITE}/lot/{n}/"
        zhpoem = zh.get(n)
        zh_html = f'\n<h2>The original poem</h2>\n<blockquote class="zh" lang="zh-Hant">{lines(zhpoem)}</blockquote>' if zhpoem else ""
        prev_ = f'<a href="/lot/{n-1}/">← Lot {n-1}</a>' if n > 1 else "<span></span>"
        next_ = f'<a href="/lot/{n+1}/">Lot {n+1} →</a>' if n < 100 else "<span></span>"
        body = f"""<p class="kicker">Guanyin oracle · Lot {n} of 100</p>
<h1>Guanyin Lot {n} Meaning</h1>
<span class="tone">{esc(tone)}</span>
<h2>In one line</h2>
<p>{esc(f['meaning'])}</p>
<h2>Guanyin's whisper</h2>
<blockquote>{lines(W.get(str(n), f['poem']))}</blockquote>{zh_html}
<h2>The poem in English</h2>
<blockquote>{lines(f['poem'])}</blockquote>
<div class="cta">
  <p><strong>Did this lot find you for a reason?</strong><br>Ask Guanyin your own question about love, career or money.</p>
  <a class="btn" href="/">Ask your own question — your first full reading is free</a>
</div>
<nav class="pn">{prev_}<a href="/lots/">All lots</a>{next_}</nav>"""
        ld = {"@context": "https://schema.org", "@type": "Article", "headline": f"Guanyin Lot {n} Meaning",
              "description": desc, "url": can, "inLanguage": "en", "publisher": {"@type": "Organization", "name": "Guanyin Love"}}
        os.makedirs(f"lot/{n}", exist_ok=True)
        open(f"lot/{n}/index.html", "w").write(page(title, desc, can, body, ld))
        urls.append(can)
        items.append(f'<li><a href="/lot/{n}/">Lot {n}<small>{esc(tone)}</small></a></li>')
    body = """<p class="kicker">Guanyin oracle</p>
<h1>All 100 Guanyin Lots and Their Meanings</h1>
<p>The traditional Guanyin oracle has one hundred numbered lots, each with a four-line poem. If you drew a lot at a temple, find its number below for a plain-English reading.</p>
<ul class="grid">
""" + "\n".join(items) + """
</ul>
<div class="cta"><p>Have a question on your heart?</p><a class="btn" href="/">Draw your own lot — the first full reading is free</a></div>"""
    open("lots/index.html", "w").write(page("All 100 Guanyin Lots and Their Meanings | Guanyin Love",
        "Every Guanyin oracle lot from 1 to 100 with a plain-English meaning. Find the lot you drew at the temple.", SITE + "/lots/", body))
    today = datetime.date.today().isoformat()
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sm += [f"  <url><loc>{u}</loc><lastmod>{today}</lastmod></url>" for u in urls] + ["</urlset>", ""]
    open("sitemap.xml", "w").write("\n".join(sm))
    open("robots.txt", "w").write(f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")
    print("built", len(urls), "urls")

if __name__ == "__main__":
    zh = {}
    if os.path.exists("tools/poems_zh.json"):
        zh = {int(k): v for k, v in json.load(open("tools/poems_zh.json")).items()}
    main(zh)
