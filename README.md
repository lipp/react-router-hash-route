# react-router-hash-route
Enable hash / id based routes with react router.

Check the [example](https://react-router-hash-route.now.sh).

The `HashRoute` component scrolls to the "wrapped" element after `componentDidMount` or on route change when the hash / id matches.

# Install

```sh
$ npm i react-router-hash-route
```

# Usage

Given the component `Foo` (Your component MUST render the id prop):

```
const Foo = ({id}) => <div id={id}>Foo</div>
```

## `render` prop

```js
<HashRoute 
  id='foo'
  render={({id}) => <Foo id={id} />} 
  />
```

## `component` prop

```js
<HashRoute
  id='foo'
  component={Foo}
  />
```

# Options

## `offset` prop (number, default=0)

An optional vertical offset when using fixed headers.

## `scoll` prop (function, default="jump")

A customizable scroll function with the signature:

```js
const scroll = (node, offset) = {}
```

If you want to have animations etc.

# Limitations

## BrowserRouter

When a certain hash is active (e.g. "users#foo") than navigating AGAIN to the same route (e.g. by clicking an anchor link to "users#foo") will JUMP to element #foo into view. The actual `scroll` function will not be invoked. Jumping to the hash element is default browser behaviour. There is no actual route change and thus `HashRoute` has
no way to figure out that it should scroll the respective element into view.

## with HashRouter

When a certain hash is active (e.g. "users#foo") than navigating AGAIN to the same route (e.g. by clicking an anchor link to "users#foo") will NOT scroll element #foo into view. This is because there is no actual route change and thus `HashRoute` has
no way to figure out that it should scroll the respective element into view.

# Development

Start watching and building the lib:

```sh
$ npm i && npm run dev
```

Build and start the example website with hot-reloading:

```sh
$ npm run dev
```
