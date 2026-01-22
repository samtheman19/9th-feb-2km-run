import WorkoutHeader from "./components/WorkoutHeader";
import Timer from "./components/Timer";
import WorkoutDetails from "./components/WorkoutDetails";
import Mobility from "./components/Mobility";

export default function App() {
  return (
    <div className="app">
      <WorkoutHeader />
      <Timer />
      <WorkoutDetails />
      <Mobility />
    </div>
  );
}
