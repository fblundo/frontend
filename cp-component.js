<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First React app</title>
  </head>
  <body>

    <div id="app"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.1.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.1.0/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>

    <script type="text/babel">
       class Greeting extends React.Component {
         render() {
           return (
             <div>
               <h1>Hello World!</h1>
             </div>
           );
         }
       }

// comment
       ReactDOM.render(
         <Greeting />, document.getElementById('app')
       );
    </script>
  </body>
</html>
