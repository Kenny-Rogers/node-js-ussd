const response = (type = null, message = null, clientState = null) => {
  return {
    Type: type,
    Message: message,
    ClientState: clientState
  };
};

const start = () =>
  response(
    "Response",
    "Welcome to the registration portal\nPlease enter your full name:",
    1
  );

const get_ward_name = () =>
  response("Response", "Please enter your ward's name:", 2);

const get_national_id = () =>
  response("Response", "Please enter your National Id:", 3);

const summary = () =>
  response("Release", "Thank you for using our ussd service", null);

const error = () => response("Release", "Sorry something went wrong", null);

const ussd_router = request_body => {
  const state_map = {
    1: get_ward_name(),
    2: get_national_id(),
    3: summary()
  };

  return request_body.Type == "initiation"
    ? start()
    : request_body.Type == "response"
    ? state_map[request_body.ClientState]
    : error();
};

module.exports = ussd_router;
