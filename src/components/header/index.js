import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Content, LittleBall } from "./styles";
import { Button, AppBar, Box, Toolbar, createTheme } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  const { cart } = useSelector((state) => state);
  createTheme();
  return (
    <>
      <Box bgcolor="info.main" sx={{ flexGrow: 1 }}>
        <AppBar bgcolor="info.main" position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              color: "white",
            }}
          >
            <Button>
              <Link to="/">
                <Content>Home</Content>
              </Link>
            </Button>

            <Button>
              <Link to="/cart">
                <Content>
                  <ShoppingCartIcon sx={{ width: "28px", height: "28px" }} />
                </Content>
              </Link>
              <LittleBall> {cart.length} </LittleBall>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
