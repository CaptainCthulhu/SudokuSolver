import * as querystring from "querystring";

export async function MakeRequest(url: string, params: Object, method = "GET") {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json", // we will be sending JSON
    },
  };

  // if params exists and method is GET, add query string to url
  // otherwise, just add params as a "body" property to the options object
  if (params) {
    if (method === "GET") {
      url += "?" + objectToQueryString(params);
    } else {
      options.body = JSON.stringify(params); // body should match Content-Type in headers option
    }
  }

  const response = await fetch(url, options);
  const result = response.json();
  return result;
}

function objectToQueryString(obj: Object) {
  let str = querystring.stringify(obj as querystring.ParsedUrlQuery);
  return str;
}
