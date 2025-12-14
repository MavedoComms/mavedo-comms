import { Link } from "react-router-dom";

export default function CTAButton({ label = "Get a Quote" }: { label?: string }) {
  return (
    <Link to="/contact" className="btn btn-primary">
      {label}
    </Link>
  );
}