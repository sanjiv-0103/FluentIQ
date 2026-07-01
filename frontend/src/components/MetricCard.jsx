import { motion } from "framer-motion";

function MetricCard({ icon, label, value }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="metricCard">
      <div className="metricIcon">{icon}</div>
      <p className="metricLabel">{label}</p>
      <h3 className="metricValue">{value}</h3>
    </motion.div>
  );
}

export default MetricCard;