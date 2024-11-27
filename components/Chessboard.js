import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { globalStyle } from "../assets/styles";

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"], // Black pieces
  ["p", "p", "p", "p", "p", "p", "p", "p"], // Black pawns
  ["", "", "", "", "", "", "", ""], // Empty rows
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"], // White pawns
  ["R", "N", "B", "Q", "K", "B", "N", "R"], // White pieces
];

  const getPieceImage = (piece) => {
    const pieceImages = {
      p: require("../assets/images/p_b.png"),
      r: require("../assets/images/r_b.png"),
      n: require("../assets/images/n_b.png"),
      b: require("../assets/images/b_b.png"),
      q: require("../assets/images/q_b.png"),
      k: require("../assets/images/k_b.png"),
      P: require("../assets/images/p_w.png"),
      R: require("../assets/images/r_w.png"),
      N: require("../assets/images/n_w.png"),
      B: require("../assets/images/b_w.png"),
      Q: require("../assets/images/q_w.png"),
      K: require("../assets/images/k_w.png"),
    };

    return pieceImages[piece];
  };
export default Chessboard = () => {
    const [board, setBoard] = useState(initialBoard);
    const renderSquare = (rowIndex, colIndex) => {
        const piece = board[rowIndex][colIndex];
        const isLightSquare = (rowIndex + colIndex) % 2 === 0;
        return (
            
            <TouchableOpacity
                key={`${rowIndex}-${colIndex}`}
                style={[
                    globalStyle.square, isLightSquare ? globalStyle.lightSquare : globalStyle.darkSquare
                ]}
            >
                {
                    piece && (
                        <Image
                            source={getPieceImage(piece)}
                            style={globalStyle.piece}
                        />
                    )
                }
            </TouchableOpacity>
        )
    }

    return (
        <View style={globalStyle.board}>
            {board.map((row, rowIndex) => row.map((_, colIndex) => renderSquare(rowIndex, colIndex)))}
        </View>
    )
};
