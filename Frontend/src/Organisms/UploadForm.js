import "./UploadForm.css";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Button, LinkButton } from "../Atoms/Buttons";
import Thumbnail from "../images/notesCovers/AnyMaterial (8).jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import BookCoverTemplate1 from "../images/notesCovers/AnyMaterial (1).jpg";
import BookCoverTemplate2 from "../images/notesCovers/AnyMaterial (1).webp";
import BookCoverTemplate3 from "../images/notesCovers/AnyMaterial (2).jpg";
import BookCoverTemplate4 from "../images/notesCovers/AnyMaterial (3).jpg";

export const UploadFormStep1st = () => {
  return (
    <div className="UploadForm">
      <div className="nameClose">
        <div className="name boldme">Master Peta.pdf</div>
        <LinkButton className="iconbtn">
          <RxCross2 />
        </LinkButton>
      </div>
      <form action="">
        <div className="form-section">
          <h3 className="title">Details</h3>
          <div className="form-body">
            <div className="field-groups">
              <div className="field">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  id="title"
                />
              </div>
              <div className="field">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter title"
                  cols="30"
                  rows="5"></textarea>
              </div>
            </div>
            <div className="thumbnail">
              <div className="cover">
                <img
                  src={Thumbnail}
                  alt=""
                />
              </div>
              <p className="filename">Master Peta.pdf</p>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="title">Price</h3>
          <div className="form-body">
            <div className="field-price-groups">
              <div className="field">
                <label htmlFor="title">MRP (Maximum Retail Price)</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  id="title"
                />
              </div>
              <AiOutlinePlus className="icon" />
              <div className="field">
                <label htmlFor="title">Platform Tax</label>
                <input
                  type="text"
                  disabled
                  value="2%"
                  id="title"
                />
              </div>
              <FaEquals className="icon" />
              <div className="field">
                <label htmlFor="title">Total</label>
                <input
                  type="text"
                  id="title"
                  disabled
                  value="89"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="operations">
          <Button
            className="btn"
            size="sm"
            variant="light">
            Clear Fields
          </Button>
          <Button
            className="btn"
            size="sm">
            Save & Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export const UploadFormStep2nd = () => {
  return (
    <div className="UploadForm">
      <div className="nameClose">
        <div className="name boldme">Master Peta.pdf</div>
        <LinkButton className="iconbtn">
          <RxCross2 />
        </LinkButton>
      </div>
      <form action="">
        <div className="form-section">
          <h3 className="title">Info</h3>
          <div className="form-body form-body-vf">
            <div className="infoInputgroup">
              <div className="field">
                <label htmlFor="title">Subject</label>
                <select
                  name="subject"
                  id="">
                  <option value="">Select Subject</option>
                  <option value="">Maths</option>
                  <option value="">Science</option>
                  <option value="">English</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="title">Notes Cover</label>
                <select
                  name="subject"
                  id="">
                  <option value="">
                    Full Chapter or Some Topic of Chapter
                  </option>
                  <option value="">Full Chapter</option>
                  <option value="">Topic of chapter</option>
                  <option value="">English</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="title">Chapter Name</label>
                <input
                  type="text"
                  placeholder="Enter Name of Chapter"
                  id="title"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="title">Covered Topics</h3>
          <div className="form-body form-body-vf">
            <div className="coveredTopics">
              <div className="field">
                <p className="small">
                  {" "}
                  It would be helpful for students to know which topics this
                  notes cover.
                </p>
                <div className="topics">
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 1 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 2 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 3 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 4 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 4 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 4 <RxCross2 />{" "}
                  </Button>
                  <Button
                    shape="rounded"
                    size="sm"
                    variant="secondary">
                    Topic 4 <RxCross2 />{" "}
                  </Button>
                </div>
                <div className="inputbtn">
                  <input
                    type="text"
                    placeholder="Enter Topic Names"
                    id="title"
                  />
                  <Button
                    size="sm"
                    variant="primary"
                    shape="rectangular">
                    Add Topic
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h3 className="title">Book Cover</h3>
          <div className="form-body form-body-vf">
            <div className="coveredTopics">
              <div className="field">
                <p className="small">
                  {" "}
                  It would be helpful for students to diffrentiate between notes
                  by visualls.
                </p>
                <div className="bookCovers">
                  <div className="bookCover">
                    <AiOutlinePlus className="icon" />
                  </div>
                  <div className="bookCoverTemplates">
                    <img
                      src={BookCoverTemplate1}
                      alt=""
                    />
                    <img
                      src={BookCoverTemplate2}
                      alt=""
                    />
                    <img
                      src={BookCoverTemplate3}
                      alt=""
                    />
                    <img
                      src={BookCoverTemplate4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="operations">
          <Button
            className="btn"
            size="sm"
            variant="light">
            Clear Fields
          </Button>
          <Button
            className="btn"
            size="sm">
            Save & Next
          </Button>
        </div>
      </form>
    </div>
  );
};
