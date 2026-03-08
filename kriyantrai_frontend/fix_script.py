import sys
import re

file_path = 'src/app/solutions/application-development/page.tsx'

with open(file_path, 'r') as f:
    content = f.read()

# Fix 1: Extra tags after Case Studies
content = re.sub(r'\s*</div>\s*</section >\s*\{\/\* Application Development by Industry \(Tabbed\) \*\/\se*\}',
                 r'\n\n                {/* Application Development by Industry (Tabbed) */}', content, count=1)

# Fix 2: Extra tags and space formatting around Development Journey
content = re.sub(r'\s*</div>\s*</section >\s*\{\/\* Development Journey \*\/\se*\}\s*<\s*section\s+id\s*=\s*"development-journey"\s*className\s*=\s*"w-full bg-\[#153776\] text-white py-24 z-20 relative scroll-mt-24"\s*>',
                 r'\n                    </div>\n                </section>\n\n                {/* Development Journey */}\n                <section id="development-journey" className="w-full bg-[#153776] text-white py-24 z-20 relative scroll-mt-24">', content, count=1)

# Fix 3: Extra tags before Related Solutions and spacing
content = re.sub(r'\s*</section >\s*</div >\s*</section >\s*\{\/\* Related Solutions \*\/\se*\}\s*<\s*section\s+className\s*=\s*"w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20 relative"\s*>',
                 r'\n                </section>\n\n                {/* Related Solutions */}\n                <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20 relative">', content, count=1)

# Fix 4: End of Related Solutions section
content = re.sub(r'\s*</section >\s*<div className="w-full flex-1 z-20 bg-white border-t border-gray-100">',
                 r'\n                </section>\n\n                <div className="w-full flex-1 z-20 bg-white border-t border-gray-100">', content, count=1)

# Fix 5: main and div end
content = re.sub(r'\s*</main >\s*</div >',
                 r'\n            </main>\n        </div>', content, count=1)

with open(file_path, 'w') as f:
    f.write(content)

print("Done")
