async function request(url: string, params: object, method = "GET") {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json", // we will be sending JSON
    }    
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
  const result = await response.json();

  return result;
}

function objectToQueryString(obj: object) {
  return Object.entries(obj)
    .map(entry => entry.values + "=" + entry.values.toString())
    .join("&");
}

export default function getGameElementValue(
  gridId: number,
  xLocation: number,
  yLocation: number
): object {
  var url = "/GridController/GetElement";
  var params = {
    gridId: gridId,
    xLocation: xLocation,
    yLocation: yLocation,
  };

  return request(url, params);
}
