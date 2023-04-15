import React from "react";
import MyReact from "./MyReact";

const jsx = <div className="wrap">
    <div className="div1">11</div>
    <div className="div2">22</div>
    <div className="div3">33</div>
</div>;

MyReact.render(jsx, document.getElementById('root')!);

