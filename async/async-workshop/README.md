# Async Workshop

This workshop has you implement various asynchronous utility functions.

* [Parallel](https://caolan.github.io/async/v3/docs.html#parallel)
* [map](https://caolan.github.io/async/v3/docs.html#map)
* [waterfall](https://caolan.github.io/async/v3/docs.html#waterfall)

To complete the workshop, simply fill out the functions in `src/async.js` such that the tests in `spec/async-spec.js` all pass.

You may have CORS issues when trying to run the specs. To get around this, you need to create a server that can serve the files.

In the root directory of the project run one of the following commands:

For python 2, run `python -m SimpleHTTPServer`

For python 3, run `python -m http.server`

Now in your browser, go to `http://localhost:8000/SpecRunner.html?random=false` to run the tests.

Note, your python server may use a different port, for example port 8080 instead of 8000. Adjust the url above so it uses the correct port.

## Hints

When reading up on async, you may have come across Promises and the "async/await" syntax. We will certainly use those throughout the course. However, for many problems it is more appropriate to simply use callback functions. In this lab, callback functions will be enough, so no need to use Promises or async/await.
