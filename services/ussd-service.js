const start = () => {
  Type: "Response";
  Message: "Welcome to the registration portal\nPlease enter your full name:";
  ClientState: 1;
};

const get_ward_name = () => {
  Type: "Response";
  Message: "Please enter your ward's name:";
  ClientState: 2;
};

const get_national_id = () => {
  Type: "Response";
  Message: "Please enter your National Id:";
  ClientState: 3;
};

const summary = () => {
  Type: "Release";
  Message: "Thank you for using our ussd service";
  ClientState: null;
};

const error = () => {
  Type: "Release";
  Message: "Sorry something went wrong";
  ClientState: null;
};

const router = request_body => {
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

module.exports = router;
