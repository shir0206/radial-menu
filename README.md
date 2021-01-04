# :large_blue_circle: Radial Menu
<img align="right" src="https://user-images.githubusercontent.com/40990488/103512521-84ba3980-4e71-11eb-872a-b7d0eed4f5d7.png" alt="desktop-view" width="450px">


Creating a **recursive radial menu** that retrieves from a **server** the structure of folders & images. 

When an image is clicked, it is displayed below, along with a gallery of all the rest of the images at the current level.

The code is written in `React.js`, the data is retrived using `axios`.
<br><br>

:white_circle: Grey button = Folder

:large_blue_circle: Blue button = Image
<br><br>

Link: https://shir0206.github.io/radial-menu/

<hr>

### :large_blue_circle: Recursive Menu

The button is built recursively so that each button in the menu is represented as a `Node` component.

1. The root is initiated as follows:

  ``` javascript
    export const NodeList = (props) => {
      const [clickedChildren, setClickedChildren] = useState([false]);
      const arr = [];
      return (
        <ul className="nodes-cont">
          <Node
            className={"root"}
            index={0} // The position of the Node out of all the siblings
            label={"root"}
            type={"0"} // "0" = Folder, "1" = Image
            siblings={arr} // Empty array, the root has no siblings
            clickedChildren={clickedChildren} // An array of flags indicating none of its children is clicked
            // . . .
          ></Node>
        </ul>
      );
    };
  ```

2) When the button is clicked, a request is sent to the server for information on the next level.<br>
When the result is returned, the current `Node` sets in the parent's flag array (`props.setClickedChildren`) that it is clicked, while turnning off the rest of the flags of all the other siblings `Node`'s.

``` javascript
  const getData = useCallback(async () => {
    try {
      // Get result from server
      const result = await axios.get(`${receiptUrl}`, {
        json: true,
        headers: { "X-TOKEN": clientToken },
      });

      // Get next children nodes to the state
      const resultData = result.data.data;
      setCurrNodeChildren(resultData);

      // Update the parent's "clicks" array:
      // Turn on the flag that the current node is clicked
      // Turn off the flags for all the other siblings.
      // Such that if the sibling's menu was open it would close.
      props.setClickedChildren((clickedChildren) => {
        let clickedChildrenArray = new Array(clickedChildren.length).fill(
          false
        );
        clickedChildrenArray[props.index] = true;
        return clickedChildrenArray;
      });

      // Init gallery
      // . . .

    } catch (err) {
      // Request fail
      window.alert(err.message);
    }
  });

```

3. Finally, the current `Node` returns `ul` of all the children `Node`'s at the next level.

``` javascript
  return (
    <>
    
      <button
        onClick={getData}
        // . . .
      ></button>
      
      {props.clickedChildren[props.index] && (
        <ul className="nodes">
          {currNodeChildren.children &&
            currNodeChildren.children.map((nodeChild, index) => (
              <Node
                key={nodeChild.label}
                index={index}
                type={nodeChild.type}
                label={currNodeLabel + "/" + nodeChild.label.toString()}
                siblings={currNodeChildren.children}
                clickedChildren={clickedChildren}
                setClickedChildren={setClickedChildren}
                // . . .
              ></Node>
            ))}
        </ul>
      )}
      
    </>
  );

```
<hr>

### :large_blue_circle: Radial Menu

1. Each button is initiated to an absolute position in the upper left corner of the screen.

```css
button {
  position: absolute;
  top: max(1vw, 1vh);
  left: max(1vw, 1vh);
  // . . .
}
```

2. The position of the button on the screen is dynamically changing, using the function `calcPosition`.
``` javascript
    <button
      style={{ transform: calcPosition(level, nodesInLevel, currNode) }}
      // . . .
    >
```

3. Trigonometric calculation of the position of the button on the screen:

   1. Parameters:
      * According to the level of the button in the tree, calculated the radius of the circle.
      * According to the number of nodes in the level, calculated the number of points that should be in the arc.
      * The position of the button out of all the level buttons.

   2. Calculation of the angle and position:
      * According to the input of the function, calculated the angle of the button (relative to the screen).
      * According to the angle, calculated the position coordinates to which the button should be moved.
      
``` javascript
  const calcPosition = (level, nodesInLevel, currNode) => {
    if (props.label === "root") return;
    if (!currNodeChildren) return;

    // Arc level radius
    const radiusWeight = width < 600 ? 7 : 4; // The width is received from a custom hook that checks the size of the screen
    let r = (level + 1) * radiusWeight;

    // The quantity of nodes in the current level
    let n = nodesInLevel;

    // The current node index
    let i = currNode;

    // The current node angle
    let a = (Math.PI / 2 / (n + 1)) * i;

    // Calculate the current node position on the arc
    let x = Math.abs(r * Math.cos(a));
    let y = Math.abs(r * Math.sin(a));

    // Translate the node to the calculated position on the arc
    let style = "translate(" + x + "vw, " + y + "vw)";

    return style;
  };
```
<hr>

### :large_blue_circle: Demo

#### :computer: Desktop View:

<img  src="https://user-images.githubusercontent.com/40990488/103488029-42addb00-4e12-11eb-83ac-7974d9b05ec1.gif" alt="desktop-view" width="100%">


#### :iphone: Mobile View:


<img align="center" src="https://user-images.githubusercontent.com/40990488/103487955-a5eb3d80-4e11-11eb-8939-4d2d43f9ef89.gif" alt="mobile-view" height="400px">
