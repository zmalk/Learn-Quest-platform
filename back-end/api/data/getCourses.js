import connection from "../../db/db.js";
import handleResponse from "../../utils/handleResponse.js";

const getCourses = (req, res) => {
  (async () => {
    try {
      const query = `SELECT * FROM courses`;
      const result = await connection.promise().query(query);
      handleResponse(res, null, "", 201, 500, result[0], "");
    } catch (error) {
      handleResponse(
        null,
        error,
        "Error selecting from courses: ",
        201,
        500,
        "Error to select course"
      );
    }
  })();
};

export default getCourses;
