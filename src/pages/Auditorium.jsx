import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  getAuditoriumDetailsAPI,
  getAuditoriumDetailsForUpdationAPI,
  removeAuditoriumDetailsAPI,
  saveAuditoriumAPI,
  updateAuditoriumDetailsAPI,
} from "../services/AllApi";

const AuditoriumDetails = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availability, setAvailability] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [editId, setEditId] = useState(null);
  const [auditoriumDetails, setAuditoriumDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidPlace, setIsValidPlace] = useState(true);
  const [isValidCapacity, setIsValidCapacity] = useState(true);
  const [isValidAvailability, setIsValidAvailability] = useState(true);
  const [isValidImageLink, setIsValidImageLink] = useState(true);

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        setIsValidName(/^[a-zA-Z\s]+$/.test(value));
        break;
      case "place":
        setIsValidPlace(value.trim() !== "");
        break;
      case "capacity":
        setIsValidCapacity(/^[1-9][0-9]*$/.test(value));
        break;
      case "availability":
        setIsValidAvailability(/^(Yes|No)$/i.test(value));
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
    setPlace("");
    setCapacity("");
    setAvailability("");
    setImageLink("");
    setEditId(null);
    setIsValidName(true);
    setIsValidPlace(true);
    setIsValidCapacity(true);
    setIsValidAvailability(true);
    setIsValidImageLink(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !place || !capacity || !availability || !imageLink) {
      alert("Please fill out all fields.");
      return;
    }
    if (isValidName && isValidPlace && isValidCapacity && isValidAvailability && isValidImageLink) {
      const auditoriumDetails = { name, place, capacity, availability, imageLink };
      try {
        if (editId) {
          await updateAuditoriumDetailsAPI(editId, auditoriumDetails);
          alert("Auditorium details updated successfully!");
        } else {
          await saveAuditoriumAPI(auditoriumDetails);
          alert("Auditorium details submitted successfully!");
        }
        resetForm();
        getAuditoriumDetails();
      } catch (error) {
        console.error("Error submitting auditorium details:", error);
      }
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  const getAuditoriumDetails = async () => {
    setIsLoading(true);
    try {
      const response = await getAuditoriumDetailsAPI();
      setAuditoriumDetails(response.data || []);
    } catch (error) {
      console.error("Error fetching auditorium details:", error);
      setAuditoriumDetails([]);
    } finally {
      setIsLoading(false);
    }
  };

  const removeAuditoriumDetails = async (id) => {
    try {
      await removeAuditoriumDetailsAPI(id);
      getAuditoriumDetails();
    } catch (error) {
      console.error("Error removing auditorium details:", error);
    }
  };

  const updateAuditoriumDetails = async (id) => {
    try {
      const response = await getAuditoriumDetailsForUpdationAPI(id);
      const data = response.data;
      setName(data.name);
      setPlace(data.place);
      setCapacity(data.capacity);
      setAvailability(data.availability);
      setImageLink(data.imageLink);
      setEditId(id);
    } catch (error) {
      console.error("Error updating auditorium details:", error);
    }
  };

  useEffect(() => {
    getAuditoriumDetails();
  }, []);

  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const auditoriumListStyle = {
    marginTop: "20px",
  };

  const auditoriumCardStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const auditoriumImageStyle = {
    maxWidth: "100px",
    height: "auto",
    borderRadius: "5%",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const auditoriumInfoStyle = {
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
              <h2>{editId ? "Edit" : "Add"} Auditorium</h2>
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
                <Form.Group controlId="capacity" className="mt-3">
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control
                    type="number"
                    value={capacity}
                    onChange={(e) => {
                      setCapacity(e.target.value);
                      validateInput("capacity", e.target.value);
                    }}
                    placeholder="Enter Capacity"
                    isInvalid={!isValidCapacity}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid capacity (must be a positive number).
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="availability" className="mt-3">
                  <Form.Label>Availability (Yes/No)</Form.Label>
                  <Form.Control
                    type="text"
                    value={availability}
                    onChange={(e) => {
                      setAvailability(e.target.value);
                      validateInput("availability", e.target.value);
                    }}
                    placeholder="Enter Availability"
                    isInvalid={!isValidAvailability}
                  />
                  <Form.Control.Feedback type="invalid">
                    Availability must be either "Yes" or "No".
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
            <div style={auditoriumListStyle}>
              <h2 className="text-center">Auditorium List</h2>
              {isLoading ? (
                <p className="text-center" style={{ color: "#777" }}>
                  Loading...
                </p>
              ) : auditoriumDetails.length > 0 ? (
                auditoriumDetails.map((auditorium) => (
                  <div key={auditorium.id} style={auditoriumCardStyle}>
                    <Row className="align-items-center">
                      <Col xs={12} md={3} className="text-center">
                        <img src={auditorium.imageLink} alt="Auditorium" className="img-fluid" style={auditoriumImageStyle} />
                      </Col>
                      <Col xs={12} md={6} className="mt-3 mt-md-0">
                        <div style={auditoriumInfoStyle}>
                          <p>
                            <strong>Name:</strong> {auditorium.name}
                          </p>
                          <p>
                            <strong>Place:</strong> {auditorium.place}
                          </p>
                          <p>
                            <strong>Capacity:</strong> {auditorium.capacity}
                          </p>
                          <p>
                            <strong>Availability:</strong> {auditorium.availability}
                          </p>
                        </div>
                      </Col>
                      <Col xs={12} md={3} className="d-flex flex-column align-items-center mt-3 mt-md-0">
                        <Button
                          style={actionButtonStyle}
                          onClick={() => updateAuditoriumDetails(auditorium.id)}
                          className="mb-2 w-100"
                        >
                          Edit
                        </Button>
                        <Button
                          style={{ ...actionButtonStyle, backgroundColor: "#e74c3c", color: "#fff" }}
                          onClick={() => removeAuditoriumDetails(auditorium.id)}
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
                  No auditorium details available.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuditoriumDetails;
