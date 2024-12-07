# Tailwind CSS: Unexpected Hover Behavior on Nested Elements

This repository demonstrates an uncommon bug in Tailwind CSS involving unexpected hover behavior on nested elements when using absolute positioning.  The issue arises when a hover state is applied to an absolutely positioned child element, inadvertently affecting its parent element's styling.

## Problem Description:

The provided code snippet shows a nested structure with absolute positioning. The expected behavior is that only the inner button should change its background color when hovered. However, the parent `div` also changes color due to the way Tailwind's hover pseudo-class propagates to its ancestors.

## Solution:

To resolve this, we can use the `hover:group-hover` utility class in conjunction with the `group` class to confine the hover effect only to the button, preventing unintended style changes to the parent.

## How to reproduce:

1. Clone this repository.
2. Open the `bug.html` file in your browser.
3. Observe the hover behavior on the button. Notice that both the button and the parent `div` change color on hover.
4. Open the `bugSolution.html` file in your browser.
5. Observe the correct behavior where only the button changes color when hovered.
