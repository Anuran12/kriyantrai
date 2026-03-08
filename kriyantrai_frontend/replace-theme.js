const fs = require('fs');
const file = 'src/app/solutions/process-automation/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replacements
content = content.replace(/text-black/g, 'text-white');
content = content.replace(/bg-white/g, 'bg-[#121b2b]');
content = content.replace(/bg-\[\#f8f9fc\]/g, 'bg-[#0f172a]');
content = content.replace(/border-gray-100/g, 'border-gray-800');
content = content.replace(/border-gray-200/g, 'border-gray-800');
content = content.replace(/text-gray-600/g, 'text-gray-400');
content = content.replace(/text-gray-700/g, 'text-gray-300');
content = content.replace(/text-gray-800/g, 'text-gray-200');
content = content.replace(/text-gray-500/g, 'text-gray-400');

// Specifics
content = content.replace(/bg-transparent/g, 'bg-[#0a0f1c]');
content = content.replace(/bg-gray-100\/50/g, 'bg-gray-800/50');
content = content.replace(/border-white\/60/g, 'border-gray-700/60');
content = content.replace(/hover:bg-\[\#121b2b\]\/50/g, 'hover:bg-gray-800/50'); // fix hover:bg-white/50

// Fix contrast on sticky active text
content = content.replace(/isActive \? 'text-\[\#042F2E\]'/g, "isActive ? 'text-[#042F2E]'");

fs.writeFileSync(file, content);
console.log("Done");
