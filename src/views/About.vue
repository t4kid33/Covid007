<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">กรอกข้อมูล</label>
    <div class="row">
      <div class="col">
        ชื่อ<input type="text" v-model="name" /> นามสกุล<input
          type="text"
          v-model="lastname"
        />
      </div>
    </div>

    <span>ผลตรวจATK</span>
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
      v-model="checkedNames"
      value="+"
    />
    <label class="form-check-label" for="flexRadioDefault1"> + </label>

    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault2"
      v-model="checkedNames"
      value="-"
    />
    <label class="form-check-label" for="flexRadioDefault2"> - </label>
    <div class="row">
      <div class="col">
        E-mail<input v-model="mails" /> หมายโทรศัพท์<input
          v-model="numberphone"
        />
      </div>
    </div>

    <button @click="addData()" type="button" class="btn btn-success">
      เสร็จสิ้น
    </button>
    <button @click="readData()" type="button" class="btn btn-warning">
      ดูข้อมูล
    </button>
    <h4>{{ dbData }}</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ลำดับ</th>
          <th scope="col">ชื่อ</th>
          <th scope="col">นามสกุล</th>
          <th scope="col">ATK</th>
          <th scope="col">E-mail</th>
          <th scope="col">เบอร์โทรศัพท์</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in table" :key="index">
        <tr>
          <th scope="row">{{ index }}</th>
          <td>{{ item.data.name }}</td>
          <td>{{ item.data.lastname }}</td>
          <td>{{ item.data.atk }}</td>
          <td>{{ item.data.mail }}</td>
          <td>{{ item.data.number }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import db from "../plugins/firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      dbData: "",
      name: " ",
      lastname: "",
      checkedNames: "",
      mails: "",
      numberphone: "",
      table: [],
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "noteCovid"), {
          name: this.name,
          lastname: this.lastname,
          atk: this.checkedNames,
          mail: this.mails,
          number: this.numberphone,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "noteCovid"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.table.push({ id: doc.id, data: doc.data() });
      });
    },
    /* addit() {
      this.additems.push({
        text: this.name,
      });
    },*/
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
