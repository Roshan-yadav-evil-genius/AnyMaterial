import "./ProductTable.css";
import React from "react";
import { LinkButton } from "../Atoms/Buttons";
// import { Button } from "../Atoms/Buttons";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export const CartTable = () => {
  return (
    <table className="cart">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              name=""
              id=""
            />
          </th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
            />
          </td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="author">
                  By : <span>HG Wells </span>
                </div>
                <div className="operations">
                  <LinkButton size="sm">Remove</LinkButton>
                  <LinkButton size="sm">Save for later</LinkButton>
                  <LinkButton size="sm">Share</LinkButton>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="price">
              <p className="finalPrice">$2500.45</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
            />
          </td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="author">
                  By : <span>HG Wells </span>
                </div>
                <div className="operations">
                  <LinkButton size="sm">Remove</LinkButton>
                  <LinkButton size="sm">Save for later</LinkButton>
                  <LinkButton size="sm">Share</LinkButton>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="price">
              <p className="finalPrice">$2500.45</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
            />
          </td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="author">
                  By : <span>HG Wells </span>
                </div>
                <div className="operations">
                  <LinkButton size="sm">Remove</LinkButton>
                  <LinkButton size="sm">Save for later</LinkButton>
                  <LinkButton size="sm">Share</LinkButton>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="price">
              <p className="finalPrice">$2500.45</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              name=""
              id=""
            />
          </td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="author">
                  By : <span>HG Wells </span>
                </div>
                <div className="operations">
                  <LinkButton size="sm">Remove</LinkButton>
                  <LinkButton size="sm">Save for later</LinkButton>
                  <LinkButton size="sm">Share</LinkButton>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="price">
              <p className="finalPrice">$2500.45</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const AnalyticsTable = () => {
  return (
    <table className="analytics">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Notes</th>
          <th>Visibility</th>
          <th>Uploaded On</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="boldme">1</td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="description">
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam suscipit harum similique quas cumque eaque adipisci delectus. Aliquid et, in cupiditate cumque eum quam ea labore perspiciatis ipsum quos.".slice(
                    0,
                    100
                  )}
                  ....
                </div>
              </div>
            </div>
          </td>
          <td>
            <LinkButton size="sm">
              <FaRegEye /> Visibility
            </LinkButton>
          </td>
          <td className="boldme">oct/25/2023</td>
          <td className="boldme">43</td>
          <td className="boldme">78</td>
          <td className="boldme">34</td>
        </tr>
        <tr>
          <td className="boldme">1</td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="description">
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam suscipit harum similique quas cumque eaque adipisci delectus. Aliquid et, in cupiditate cumque eum quam ea labore perspiciatis ipsum quos.".slice(
                    0,
                    100
                  )}
                  ....
                </div>
              </div>
            </div>
          </td>
          <td>
            <LinkButton size="sm">
              <FaRegEye /> Visibility
            </LinkButton>
          </td>
          <td className="boldme">oct/25/2023</td>
          <td className="boldme">43</td>
          <td className="boldme">78</td>
          <td className="boldme">34</td>
        </tr>
        <tr>
          <td className="boldme">1</td>
          <td>
            <div className="details">
              <div className="thumbnail">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                  alt=""
                />
              </div>
              <div className="info">
                <h6 className="title">ElectroBoard</h6>
                <div className="description">
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam suscipit harum similique quas cumque eaque adipisci delectus. Aliquid et, in cupiditate cumque eum quam ea labore perspiciatis ipsum quos.".slice(
                    0,
                    100
                  )}
                  ....
                </div>
              </div>
            </div>
          </td>
          <td>
            <LinkButton size="sm">
              <FaRegEyeSlash /> Visibility
            </LinkButton>
          </td>
          <td className="boldme">oct/25/2023</td>
          <td className="boldme">43</td>
          <td className="boldme">78</td>
          <td className="boldme">34</td>
        </tr>
      </tbody>
    </table>
  );
};
