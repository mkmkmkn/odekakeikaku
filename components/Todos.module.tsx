import { Auth } from "@supabase/auth-ui-react"
import { Header } from '@/components/Header.module'
import { Sidebar } from '@/components/Sidebar.module'
import Image from 'next/image'
import styles from './Todos.module.css'
import supabaseClient from '@/utils/supabaseClient'
import { useState, useEffect } from "react"

type Todo = {
  id: number,
  created_at: any,
  task: string,
  order: number
};

type Props = {
  todos: Todo[],
  children: string
};

function Todos(props:Props) {
  const { user } = Auth.useUser();
  const [todos, setTodos] = useState<any>([]);
  const [task, setTask] = useState<string>("");

  //todosにあるデータの取得
  useEffect(() => {
    const getTodos = async () => {
      let {
        data: todos,
        error,
        status,
      } = await supabaseClient.from('todos').select('*');
      setTodos(todos);
    };
    getTodos();
  }, []);

  //todosへデータ追加
  const addTask = async (task: string) => {
      await supabaseClient.from('todos').insert({ task: task});
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();

    if (task === "") return;

    //Todoの追加
    await addTask(task);
    let {
      data: todos,
      error,
      status,
    } = await supabaseClient.from('todos').select('*');
    setTodos(todos);

    //テキストの入力欄を空にする
    setTask("");
  };

  //todosのデータ削除
  const deleteTask = async (id: number) => {
    await supabaseClient.from('todos').delete().eq("id", id);
  }

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    let {
      data: todos,
      error,
      status,
    } = await supabaseClient.from('todos').select('*');
    setTodos(todos);
  }

  if (user)
    return (
        <>
        <Header title="おでかけいかく" />
        <main className={styles.main}>
            <Sidebar title="sidebarタイトル" supabaseClient={supabaseClient} />
            <div className={styles.contents}>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
                <ul className={styles.todos}>
                    {todos.map((todo:any) => (
                      <li className={styles.card} key={todo.id}>{todo.task}<span className={styles.dustBox} onClick={() => handleDelete(todo.id)}>ごみ箱</span></li>
                    ))}
                </ul>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                  <button>追加</button>
                </form>
            </div>
        </main>
        </>
    )
  return props.children;
}

export { Todos }