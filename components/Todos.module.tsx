import { Auth } from "@supabase/auth-ui-react"
import { Header } from '@/components/Header.module'
import { Sidebar } from '@/components/Sidebar.module'
import styles from './Todos.module.css'
import supabaseClient from '@/utils/supabaseClient'
import { useState, useEffect, ReactNode } from "react"

type Todo = {
  id: number,
  title: string,
  task: string,
  time: string,
  vehicle: string,
  created_at: any,
  order: number
};

type Props = {
  // todos: Todo[],
  // children: ReactNode,
  children: any,
  supabaseClient: any
};

const Todos:React.FC<Props> = (props:Props) => {
  const { user } = Auth.useUser();
  const [todos, setTodos] = useState<any>([]);
  const [task, setTask] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [vehicle, setVehicle] = useState<string>("");
  
  //todosにあるデータの取得 useEffectでマウント時に発火
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
  const addTask = async (task: string, title: string, time: string, vehicle: string) => {
    await supabaseClient.from('todos').insert({ task: task, title: title, time: time, vehicle: vehicle});
  };

  const handleSubmit = async(e: any) => {
    e.preventDefault();

    if (task === "") return;

    //Todoの追加
    await addTask(task, title, time, vehicle);
    let {
      data: todos,
      error,
      status,
    } = await supabaseClient.from('todos').select('*');
    setTodos(todos);

    //テキストの入力欄を空にする
    setTask("");
    setTitle("");
    setTime("");
    setVehicle("");
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
        <div className={styles.mainRow}>
          <Sidebar supabaseClient={supabaseClient} />
          <main className={styles.main}>
            <div className={styles.contents}>
              <h2>計画</h2>
              <ul className={styles.todos}>
                {todos.map((todo:any) => (
                  <li className={styles.card} key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>
                      <span className={styles.symbolVehicle}>
                        {todo.vehicle.split("&")[0]}
                      </span>
                      {todo.vehicle.split("&")[1]}
                    </p>
                    <p><span className={styles.symbolTime}>Schedule</span>{todo.time}</p>
                    <p>{todo.task}</p>
                    <span className={styles.dustBox} onClick={() => handleDelete(todo.id)}>Delete</span>
                  </li>
                ))}
              </ul>
            </div>
            <form className={styles.todosForm} onSubmit={(e) => handleSubmit(e)}>
              <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="タイトル" />
              {/* <input type="text" onChange={(e) => setVehicle(e.target.value)} value={vehicle} placeholder="移動手段" /> */}
              <select onChange={(e) => setVehicle(e.target.value)} name="selectIcon">
                <option hidden>アイコン</option>
                <option value="">なし</option>
                <option value="Flight&飛行機">飛行機</option>
                <option value="Train&電車">電車</option>
                <option value="Directions_Boat&船">船</option>
                <option value="Directions_Bus&バス">バス</option>
                <option value="Directions_Car&車">車</option>
                <option value="Local_Taxi&タクシー">タクシー</option>
                <option value="Two Wheeler&バイク">バイク</option>
                <option value="Pedal_Bike&自転車">自転車</option>
                <option value="Directions_Walk&徒歩">徒歩</option>
                <option value="Distance&場所">場所</option>
                <option value="Restaurant&食事">食事</option>
                <option value="Apartment&ホテル">ホテル</option>
                <option value="Surfing&アクティビティ">アクティビティ</option>
              </select>
              <input type="text" onChange={(e) => setTime(e.target.value)} value={time} placeholder="時間" />
              <textarea onChange={(e) => setTask(e.target.value)} value={task} placeholder="内容"></textarea>
              <button className={styles.addButton}>追加</button>
            </form>
          </main>
        </div>
      </>
    )
  
  return props.children;
}

export { Todos }