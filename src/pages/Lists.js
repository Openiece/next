import DrawerAppBar from "@/components/DrawerAppBar";
import axios from "axios";
import { useEffect } from "react";

function Lists() {
  // use
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/", {
  //       headers: {
  //         token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9wZW5pZWNlIiwiZW1haWwiOiJyYW5kb21AZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMTQzIiwiaWF0IjoxNjgxMjAzMTMzLCJleHAiOjE2ODEyODk1MzN9.UXmCLYQciXM2oxwSXL4So9SjhYAwfYuy_vJ0TUu1D-c",
  //       },
  //     })
  //     .then((res) => {
  //       setList(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);
  return (
    <>
      <DrawerAppBar></DrawerAppBar>
      <h1>Lists</h1>
      {/* {list.map(({ isDone, title, assign }, index) => {
        <div key={index}>{el.title}</div>
      })} */}
    </>
  );
}

export default Lists;
