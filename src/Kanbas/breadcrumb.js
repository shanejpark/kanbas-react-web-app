import React from "react";
import { NavLink } from "react-router-dom";

export default function Breadcrumb(props) {
  return (
    <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
      <ol class="breadcrumb mt-1">
        {props.list.map((link, index) => (
          <li class="breadcrumb-item">
            <NavLink to="" class="text-decoration-none text-danger">
              {link}
            </NavLink>
          </li>
        ))}
        <li class="breadcrumb-item active" aria-current="page">
          {props.last}
        </li>
      </ol>
    </nav>
  );
}
