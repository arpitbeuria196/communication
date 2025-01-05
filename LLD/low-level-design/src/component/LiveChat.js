import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addChat } from '../utils/chatSlice';
import LiveChatCard from './LiveChatCard';



var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

var finalName = ""

function generateName() {
   var finalName = nameList[Math.floor( Math.random() * nameList.length )];
   return finalName;
};

let positiveAff = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolores!",
    "consectetur adipisicing elit. Velit, dolores!",
    "amet consectetur adipisicing elit. Velit, dolores!"
  ]
  
  function generateMessage() {
    var randomNumber = Math.floor(Math.random() * (positiveAff.length));
    return  positiveAff[randomNumber];
  }

  export const LiveChat = () => {
    const dispatch = useDispatch();
    const chatSelector = useSelector((store) => store.chat);

    useEffect(() => {
        const time = setInterval(fetchData, 3000);

        return () => {
            clearInterval(time); // Cleanup interval on unmount
        };
    }, []);

    const fetchData = () => {
        try {
            const data = [
                {
                    name: generateName(),
                    message: generateMessage(),
                },
            ];

            dispatch(addChat(data));
        } catch (error) {
            console.log(error.message);
        }
    };

    const [text, setText] = useState("");

    const sendMessageHandler = () => {
        if (text.trim() === "") return; 

        dispatch(
            addChat([
                {
                    name: "Arpit Beuria",
                    message: text.trim(),
                },
            ])
        );
        setText("");
    };

    return (
        <div className="m-5 border rounded-lg shadow-lg w-2/3 h-96 mx-auto bg-white flex flex-col">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {chatSelector.length > 0 &&
                    chatSelector.map((chat, index) => (
                        <LiveChatCard key={`${chat.name}-${index}`} {...chat} />
                    ))}
            </div>

            {/* Input and Send Button */}
            <div className="border-t flex items-center p-4">
                <input
                    placeholder="Enter text!"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 border rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={sendMessageHandler}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

