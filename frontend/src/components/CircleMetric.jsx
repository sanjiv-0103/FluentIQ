import { motion } from "framer-motion";

function CircleMetric({ label, value }) {
  const percentage = parseInt(value) || 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="circleMetric"
    >
      <div
        className="circle"
        style={{
          background: `conic-gradient(#6C63FF ${percentage * 3.6}deg, #eee 0deg)`
        }}
      >
        <div className="circleInner">
          <strong>{percentage}%</strong>
        </div>
      </div>

      <p>{label}</p>
    </motion.div>
  );
}

export default CircleMetric;