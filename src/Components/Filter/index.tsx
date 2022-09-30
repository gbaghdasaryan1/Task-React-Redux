import classes from "./Filter.module.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FilterProps } from "./Filter.props";

const Filter = ({ className, ...props }: FilterProps) => {
  return (
    <div className={classes.Filter}>
      <button>
        {" "}
        <FilterListIcon /> Filter{" "}
      </button>
    </div>
  );
};

export default Filter;
