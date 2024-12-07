```javascript
// Example of an uncommon Tailwind CSS bug: unexpected behavior with hover states on nested elements

<div class="relative">
  <div class="absolute inset-0 hover:bg-gray-200">
    <button class="p-4 bg-blue-500 hover:bg-blue-700">Hover Me</button>
  </div>
</div>

// Expected behavior: Only the inner button should have a hover effect.
// Actual behavior: The entire parent div with the absolute positioned child changes color on hover due to the `hover` pseudo-class on the child affecting the parent. 
```