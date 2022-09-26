import React, { useState } from "react";
import "./Animation.css";
import { motion } from "framer-motion";
const Animation = () => {
  const [move, setMove] = useState(false);

  const [rotate, setRotate] = useState(false);
  return (
    <>
      <div className="p-20 bg-success">
        <h1>Animation</h1>

        <motion.div
          drag
          className="mdiv"
          animate={{ rotate: [0, 200, 200, 0] , x:[0,200,200,0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <h6 className="text-center">Welcome</h6>
        </motion.div>

        <motion.div
          dragConstraints={{ left: 100, right: 100 }}
          drag
          className="mdiv"
        >
          <h6 className="text-center">Drag with dragConstraint l-100 r-100 </h6>
        </motion.div>

        <motion.div drag="y" className="mdiv">
          <h6 className="text-center"> Drag only vertically</h6>
        </motion.div>

        <motion.div drag="x" className="mdiv">
          <h6 className="text-center">Drag only horizantally</h6>
        </motion.div>

        <motion.div whileHover={{ scale: 2 }} className="mdiv">
          <h6 className="text-center">Hover event with animation</h6>
        </motion.div>

        <motion.div
          className="mdiv"
          animate={{ x: move ? 400 : -10 }}
          onClick={() => setMove(!move)}
          transition={{ delay: 0.1 }}
        >
          <h6 className="text-center">Move with delay</h6>
        </motion.div>

        <motion.div
          className="mdiv"
          animate={{ x: move ? 400 : -10 }}
          onClick={() => setMove(!move)}
          transition={{ type: "tween", duration: 1 }}
        >
          <h6 className="text-center">Move with animation type tween</h6>
        </motion.div>

        <motion.div
          className="mdiv"
          animate={{ x: move ? 400 : -10 }}
          onClick={() => setMove(!move)}
          transition={{ type: "spring", bounce: 5 }}
        >
          <h6 className="text-center">Move with animation type spring</h6>
        </motion.div>

        <motion.div
          className="mdiv"
          animate={{ x: move ? 400 : -10 }}
          onClick={() => setMove(!move)}
          transition={{ type: "inertia", velocity: 40 }}
        >
          <h6 className="text-center">Move with animation type inertia</h6>
        </motion.div>

        <motion.div
          className="mdiv"
          animate={{ rotate: rotate ? 360 : 0 }}
          onClick={() => setRotate(!rotate)}
        >
          {" "}
          <h6 className="text-center">Rotate</h6>
        </motion.div>
      </div>
    </>
  );
};
export default Animation;
