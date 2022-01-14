import ChildButton from './child';

const ParentComponent = () => {
  const click_button = (role) => {
    document.getElementById(role).innerHTML = role;
  };

  return (
    <div>
      <ChildButton
        id="button_child"
        name="button_1"
        onClick={() => {
          click_button('role_1');
        }}
      />
      <div>
        <p id="role_1" />
        <p id="role_2" />
        <p id="role_3" />
      </div>
    </div>
  );
};

export default ParentComponent;
