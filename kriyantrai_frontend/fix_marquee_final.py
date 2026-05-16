import re

with open("src/app/about-us/page.tsx", "r") as f:
    content = f.read()

# Replace the wrapper and remove gap-8 from parent, add pr-8 to children, remove pause-on-hover.
content = re.sub(
    r'<div className="w-full overflow-hidden relative flex gap-8 \[mask-image:_linear-gradient.*?\] py-4">\s*<div className="flex flex-row gap-8 min-w-max animate-marquee pause-on-hover px-4">',
    r'<div className="w-full overflow-hidden relative flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">\n                            <div className="flex flex-row gap-8 min-w-max animate-marquee pr-8">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<div className="flex flex-row gap-8 min-w-max animate-marquee pause-on-hover px-4" aria-hidden="true">',
    r'<div className="flex flex-row gap-8 min-w-max animate-marquee pr-8" aria-hidden="true">',
    content,
    flags=re.DOTALL
)

# For Why Partner with gap-6
content = re.sub(
    r'<div className="w-full overflow-hidden relative flex gap-6 \[mask-image:_linear-gradient.*?\] py-4">\s*<div className="flex flex-row gap-6 min-w-max animate-marquee pause-on-hover px-4">',
    r'<div className="w-full overflow-hidden relative flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] [-webkit-mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">\n                            <div className="flex flex-row gap-6 min-w-max animate-marquee pr-6">',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<div className="flex flex-row gap-6 min-w-max animate-marquee pause-on-hover px-4" aria-hidden="true">',
    r'<div className="flex flex-row gap-6 min-w-max animate-marquee pr-6" aria-hidden="true">',
    content,
    flags=re.DOTALL
)

with open("src/app/about-us/page.tsx", "w") as f:
    f.write(content)
