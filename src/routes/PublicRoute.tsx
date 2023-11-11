
interface Props {
  component: React.ComponentType;
  path?: string;
}

export const PublicRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  // return <Navigate to='/dashboard' />;
  return <RouteComponent />;
};
