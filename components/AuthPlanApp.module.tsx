import { Auth } from "@supabase/auth-ui-react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

function AuthPlanApp(props:any) {
  const { user } = Auth.useUser();
  const router = useRouter();

  useEffect(() => {
        if (user) router.replace("/plan");
      }, [user]);



  // if (user)
  //   return (
  //     <>
  //       <h1>ログインしていますよ～～～～ {user.user_metadata.full_name}!</h1>
  //       <button onClick={() => props.supabaseClient.auth.signOut()}>
  //         Sign out
  //       </button>
  //     </>
  //   );
  return props.children;
}

//リダイレクトで一瞬画面が移るのを防ぐ（getServerSideProps）
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session)
    return {
      redirect: {
        destination: "/plan",
        permanent: false,
      },
    };
  return {
    props: {},
  };
};

export { AuthPlanApp }