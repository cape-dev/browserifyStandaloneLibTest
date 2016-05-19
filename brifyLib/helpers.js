export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({});
}

// parse a matrix string like this
// matrix(0.586,0.8,-0.8,0.586,40,40)
// into its six components
export function parseTransformMatrix(matrix) {
  return matrix.match(/[0-9.]+/g).map(parseFloat);
}

export function createTransformMatrixStr(elems) {
  return `matrix(${elems[0]}, ${elems[1]}, ${elems[2]}, ${elems[3]},
    ${elems[4]}, ${elems[5]})`;
}

export function getChildByClass(parent, className) {
  for (let idx in parent.children) {
    let child = parent.children[idx];
    if (child.classList.contains(className)) {
      return child;
    }
  }
}

export function getParentByClass(elem, className) {
  let parent = elem.parentElement;
  while (!parent.classList.contains(className)) {
    parent = parent.parentElement;
  }
  return parent;
}