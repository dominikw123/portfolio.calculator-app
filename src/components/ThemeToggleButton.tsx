import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggleButton() {
  return (
    <Button variant="secondary" size="icon-lg">
      <FontAwesomeIcon icon={faMoon} />
    </Button>
  );
}