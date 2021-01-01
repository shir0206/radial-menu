import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function getData(props) {
  const baseUrl = "http://18.203.83.17/public/explorePictures?path=root";

  const receiptUrl = props ? baseUrl + "/" + props : baseUrl;
  const clientToken = "2d4e69f4823176197ccf41caa5ee6456";

  axios.get(receiptUrl, {
    json: true,
    headers: { "X-TOKEN": clientToken },
  });
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  //   return response;
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  //   return window.alert("error");
  // });
}

export default getData;
