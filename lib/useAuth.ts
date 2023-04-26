import supabase from '@/lib/supabase';

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) console.log(error);
}
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
}