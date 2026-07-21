import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 60 },
        { name: "KL Rahul", score: 45 },
        { name: "Hardik Pandya", score: 72 },
        { name: "Ravindra Jadeja", score: 68 },
        { name: "MS Dhoni", score: 90 },
        { name: "Rishabh Pant", score: 55 },
        { name: "Surya Kumar Yadav", score: 80 },
        { name: "Jasprit Bumrah", score: 30 },
        { name: "Mohammed Shami", score: 65 }
    ];

    // map() feature
    const allPlayers = players.map((player, index) => (
        <li key={index}>
            {player.name} - {player.score}
        </li>
    ));

    // filter() + arrow function
    const below70 = players
        .filter(player => player.score < 70)
        .map((player, index) => (
            <li key={index}>
                {player.name} - {player.score}
            </li>
        ));

    return (
        <div>
            <h2>List of Players</h2>
            <ul>{allPlayers}</ul>

            <h2>Players with Score Below 70</h2>
            <ul>{below70}</ul>
        </div>
    );
}

export default ListofPlayers;