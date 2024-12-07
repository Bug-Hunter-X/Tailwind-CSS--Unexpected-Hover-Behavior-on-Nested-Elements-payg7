```javascript
// Solution using group-hover to isolate hover effects

<div class="relative group">
  <div class="absolute inset-0">
    <button class="p-4 bg-blue-500 group-hover:bg-blue-700">Hover Me</button>
  </div>
</div>

// By using 'group', the hover effect is now properly scoped to the button only
```