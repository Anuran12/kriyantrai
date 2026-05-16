import re

with open("src/app/about-us/page.tsx", "r") as f:
    content = f.read()

def replace_purpose(match):
    cards = match.group(1)
    new_html = f'''                        <div className="w-full overflow-hidden relative flex gap-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
                            <div className="flex flex-row gap-8 min-w-max animate-marquee pause-on-hover px-4">
{cards}                            </div>
                            <div className="flex flex-row gap-8 min-w-max animate-marquee pause-on-hover px-4" aria-hidden="true">
{cards}                            </div>
                        </div>'''
    return new_html

content = re.sub(
    r'<div className="w-full overflow-hidden">\s*<div className="flex flex-row md:flex-row gap-8 w-full overflow-x-visible min-w-max animate-slide-left-continuous">\s*(<!-- Mission -->.*?</div>\s*)\s*</div>\s*</div>',
    replace_purpose,
    content,
    flags=re.DOTALL
)

with open("src/app/about-us/page.tsx", "w") as f:
    f.write(content)
