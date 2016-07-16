# simple-modal
![][bower-badge] [![][travis-badge]][travis-url] [![][bowerdeps-badge]][bowerdeps-url]

Simple, style-agnostic modal with basic controls and events.

## Installation & usage

Install simple-modal with Bower

```sh
$ bower install SimpleElements/simple-modal --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/simple-modal/simple-modal.html">
```

Then use it in your project, and call `open()` on it to show it.

```html
<simple-modal id="modal"></simple-modal>

<script>
  // Open modal
  document.querySelector('#modal').open();
</script>
```

Note for cross-browser support you should also include the [Web Components Polyfill][webcomponents].


## Options

Property  | Type    | Default  | Description                                                    
--------- | ------- | -------- | ------------                                                   
`active`  | Boolean | `false`  | Controls whether the modal is active or not                    
`title`   | String  | `''`     | Optional title to show on the modal                            
`noExit`  | Boolean | `false`  | Disable user exiting modal (manually call `.close()` method instead)


```html
<simple-modal title="My modal" no-exit></simple-modal> 
```

## Methods 

Method       | Arguments | Description                              
------------ | --------- | ------------                             
`open()`     | `none`    | Utility method to open the modal         
`close()`    | `none`    | Utility method to close the modal        
`getModal()` | `none`    | Returns the internal modal HTML element

## Styling
Simple modal is easily styleable with custom properties and CSS mixins

Property                      | Default            | Description                                   
----------------------------- | ------------------ | ------------                                  
`--simple-modal-overlay`      | `rgba(0,0,0, 0.4)` | Color of the screen overlay when modal active 
`--simple-modal-height`       | `auto`             | Height of the modal                           
`--simple-modal-width`        | `auto`             | Max width of the modal                        
`--simple-modal-padding`      | `30px`             | Padding inside the modal dialog               
`--simple-modal-close-size`   | `14px`             | Size of the close button                      
`--simple-modal-close-color`  | `rgba(0,0,0,0.6)`  | Color of the close button                     

Apply properties on simple-modal

```css
simple-modal {
  --simple-modal-overlay: rgba(255,255,255,0.4);
}
```

Mixin                  | Description                   
---------------------- | ------------                  
`--simple-modal`       | Style the modal dialog itself 
`--simple-modal-title` | Style the modal title         
`--simple-modal-close` | Style the modal close button  

Apply mixins to simple-modal

```css
simple-modal {
  @apply(--simple-modal) {
    background: black;
    color: white;
  };
}
```

## Events

Event                  | Description             
---------------------- | ------------            
`simple-modal-opened`  | Fired when modal opens  
`simple-modal-closed`  | Fired when modal closed 

-- 

MIT © [Simpla](https://www.simpla.io)

[webcomponents]: https://github.com/webcomponents/webcomponentsjs

[bower-badge]: https://img.shields.io/bower/v/simple-modal.svg
[bowerlicense-badge]: https://img.shields.io/bower/l/simple-modal.svg
[travis-badge]: https://img.shields.io/travis/SimpleElements/simple-modal.svg
[travis-url]: https://travis-ci.org/SimpleElements/simple-modal
[bowerdeps-badge]: https://img.shields.io/gemnasium/SimpleElements/simple-modal.svg
[bowerdeps-url]: https://gemnasium.com/bower/simple-modal
