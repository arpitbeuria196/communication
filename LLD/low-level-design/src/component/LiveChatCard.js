import React from "react";

const LiveChatCard = ({ name, message }) => {
    return (
        <div style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
            <h2 style={{ margin: "0", color: "blue" }}>{name}</h2>
            <p style={{ margin: "0" }}>{message}</p>
        </div>
    );
};

export default LiveChatCard;
