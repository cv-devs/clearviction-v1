import { Box, Card, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  roleRootStyle: {
    maxWidth: 360,
    margin: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(8),
  },
  roleImageStyle: {
    width: "100%",
    margin: theme.spacing(2),
  },
  roleHeadingStyle: {
    margin: theme.spacing(3),
  },
}));

const VolunteerRolesCard = ({ image, discipline, roles }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.roleRootStyle}>
        <Box display="flex" justifyContent="center">
          <Box className={classes.roleImageStyle} component="img" src={image} />
        </Box>
        <Typography
          className={classes.roleHeadingStyle}
          variant="h5"
          align="center"
        >
          {discipline}
        </Typography>
        {roles.map((role, idx) => (
          <Typography
            className={classes.roleTextStyle}
            variant="body1"
            align="center"
            key={idx}
          >
            {role}
          </Typography>
        ))}
      </Card>
    </>
  );
};

export default VolunteerRolesCard;
