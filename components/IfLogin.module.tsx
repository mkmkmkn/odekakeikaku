import { Auth } from "@supabase/auth-ui-react";

function Container(props:any) {
  const { user } = Auth.useUser();

  if (user)
    return (
      <>
        <h1>ログインしていますよ～～～～ {user.user_metadata.full_name}!</h1>
        <button onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </button>
      </>
    );
  return props.children;
}

export { Container }