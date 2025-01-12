import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  getStaffDetailsAPI,
  getStaffDetailsForUpdationAPI,
  removeStaffDetailsAPI,
  saveStaffAPI,
  updateStaffDetailsAPI,
} from "../services/AllApi";

const StaffAdd = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [editId, setEditId] = useState(null);
  const [staffDetails, setStaffDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [isValidPlace, setIsValidPlace] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidImageLink, setIsValidImageLink] = useState(true);

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        setIsValidName(/^[a-zA-Z\s]+$/.test(value));
        break;
      case "age":
        setIsValidAge(/^(1[89]|[2-9][0-9]|100)$/.test(value));
        break;
      case "place":
        setIsValidPlace(value.trim() !== "");
        break;
      case "phone":
        setIsValidPhone(/^[0-9]{10}$/.test(value));
        break;
      case "imageLink":
        setIsValidImageLink(/^(http|https):\/\//.test(value));
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setPlace("");
    setPhone("");
    setImageLink("");
    setEditId(null);
    setIsValidName(true);
    setIsValidAge(true);
    setIsValidPlace(true);
    setIsValidPhone(true);
    setIsValidImageLink(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age || !place || !phone || !imageLink) {
      alert("Please fill out all fields.");
      return;
    }
    if (isValidName && isValidAge && isValidPlace && isValidPhone && isValidImageLink) {
      const staffDetails = { name, age, place, phone, imageLink };
      try {
        if (editId) {
          await updateStaffDetailsAPI(editId, staffDetails);
          alert("Staff details updated successfully!");
        } else {
          await saveStaffAPI(staffDetails);
          alert("Staff details submitted successfully!");
        }
        resetForm();
        getStaffDetails();
      } catch (error) {
        console.error("Error submitting staff details:", error);
      }
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  const getStaffDetails = async () => {
    setIsLoading(true);
    try {
      const response = await getStaffDetailsAPI();
      setStaffDetails(response.data || []);
    } catch (error) {
      console.error("Error fetching staff details:", error);
      setStaffDetails([]);
    } finally {
      setIsLoading(false);
    }
  };

  const removeStaffDetails = async (id) => {
    try {
      await removeStaffDetailsAPI(id);
      getStaffDetails();
    } catch (error) {
      console.error("Error removing staff details:", error);
    }
  };

  const updateStaffDetails = async (id) => {
    try {
      const response = await getStaffDetailsForUpdationAPI(id);
      const data = response.data;
      setName(data.name);
      setAge(data.age);
      setPlace(data.place);
      setPhone(data.phone);
      setImageLink(data.imageLink);
      setEditId(id);
    } catch (error) {
      console.error("Error updating staff details:", error);
    }
  };

  useEffect(() => {
    getStaffDetails();
  }, []);

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const staffListStyle = {
    marginTop: "20px",
  };

  const staffCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const staffImageStyle = {
    maxWidth: "100px",
    height: "auto",
    borderRadius: "5%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const staffInfoStyle = {
    fontSize: "16px",
  };

  const actionButtonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
  };

  return (
    <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <Row>
          <Col md={6}>
            <div style={formStyle}>
              <h2>{editId ? "Edit" : "Add"} Staff</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateInput("name", e.target.value);
                    }}
                    placeholder="Enter Name"
                    isInvalid={!isValidName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid name (only letters and spaces are allowed).
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="age" className="mt-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                      validateInput("age", e.target.value);
                    }}
                    placeholder="Enter Age"
                    isInvalid={!isValidAge}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid age (between 18 and 100).
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="place" className="mt-3">
                  <Form.Label>Place</Form.Label>
                  <Form.Control
                    type="text"
                    value={place}
                    onChange={(e) => {
                      setPlace(e.target.value);
                      validateInput("place", e.target.value);
                    }}
                    placeholder="Enter Place"
                    isInvalid={!isValidPlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Place cannot be empty.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="phone" className="mt-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validateInput("phone", e.target.value);
                    }}
                    placeholder="Enter Phone Number"
                    isInvalid={!isValidPhone}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid phone number (10 digits).
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="imageLink" className="mt-3">
                  <Form.Label>Image Link</Form.Label>
                  <Form.Control
                    type="text"
                    value={imageLink}
                    onChange={(e) => {
                      setImageLink(e.target.value);
                      validateInput("imageLink", e.target.value);
                    }}
                    placeholder="Enter Image URL"
                    isInvalid={!isValidImageLink}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid URL (must start with http or https).
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="mt-4 text-center">
                  <Button type="submit" style={{ backgroundColor: "#28a745", color: "#fff" }}>
                    {editId ? "Update" : "Submit"}
                  </Button>
                  <Button type="button" onClick={resetForm} style={{ backgroundColor: "#dc3545", color: "#fff", marginLeft: "10px" }}>
                    Reset
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div style={staffListStyle}>
              <h2 className="text-center">Staff List</h2>
              {isLoading ? (
                <p className="text-center" style={{ color: "#777" }}>
                  Loading...
                </p>
              ) : staffDetails.length > 0 ? (
                staffDetails.map((staff) => (
                  <div key={staff.id} style={staffCardStyle}>
                    <Row className="align-items-center">
                      <Col xs={12} md={3} className="text-center">
                        <img src={staff.imageLink} alt="Staff" className="img-fluid" style={staffImageStyle} />
                      </Col>
                      <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div style={staffInfoStyle}>
                          <p>
                            <strong>Name:</strong> {staff.name}
                          </p>
                          <p>
                            <strong>Age:</strong> {staff.age}
                          </p>
                          <p>
                            <strong>Place:</strong> {staff.place}
                          </p>
                          <p>
                            <strong>Phone:</strong> {staff.phone}
                          </p>
                        </div>
                      </Col>
                      <Col xs={12} md={3} className="d-flex flex-column align-items-center mt-3 mt-md-0">
                        <Button
                          style={actionButtonStyle}
                          onClick={() => updateStaffDetails(staff.id)}
                          className="mb-2 w-100"
                        >
                          Edit
                        </Button>
                        <Button
                          style={{ ...actionButtonStyle, backgroundColor: "#e74c3c", color: "#fff" }}
                          onClick={() => removeStaffDetails(staff.id)}
                          className="w-100"
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <p className="text-center" style={{ color: "#777" }}>
                  No staff details available.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StaffAdd;
