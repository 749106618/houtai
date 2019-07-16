<template>
  <section>
    <!--工具条  搜索-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true">
        <el-form-item>
          <el-input placeholder="客户姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogFormVisible=true">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--表格-->
    <el-table :data="users" highlight-current-row border style="width: 100%;">
      <!-- <el-table-column type="selection" width="45"></el-table-column> -->
      <el-table-column prop="name" label="客户姓名" sortable></el-table-column>
      <el-table-column prop="phone" label="电话" sortable></el-table-column>
      <el-table-column prop="idCrad" label="身份证号" sortable></el-table-column>
      <!-- <el-table-column prop="userType" label="用户类型" width="120" sortable :formatter="userType"></el-table-column> -->
      <el-table-column prop="email" label="邮箱" sortable></el-table-column>
      <el-table-column label="银行卡" align="center" sortable>
        <template slot-scope="scope">
          <el-popover placement="left" trigger="click">
            <table>
              <td>
                <tr>银行卡号</tr>
                <tr>开户行</tr>
                <tr>所在城市</tr>
              </td>
              <td>
                <tr>{{scope.row.bankInfo.bankCrad}}</tr>
                <tr>{{scope.row.bankInfo.bankType}}</tr>
                <tr>{{scope.row.bankInfo.bankCity}}</tr>
              </td>
            </table>
            <el-button slot="reference" type="primary" size="small">银行卡信息</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="isNullMedicalRecord"
        label="个人档案"
        sortable
        :formatter="isNullMedicalRecord"
      ></el-table-column>-->
      <el-table-column label="操作" width="220px" style="padding-right:0">
        <template scope="scope" style="display:flex">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            style="flex:1"
          >修改</el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDel(scope.$index, scope.row)"
            style="flex:1"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--底部工具条-->
    <el-col :span="24" class="toolbar">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1000"
        style="float:right;"
      ></el-pagination>
    </el-col>

    <!--编辑界面--> 
    <el-dialog id='edit' title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卡号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开户行" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在城市" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { request } from "../../api/api";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      users: [
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        },
        {
          name: "周星星",
          phone: "18566666666",
          idCrad: "4304361881818188881888",
          email: "749106188@qq.com",
          bankInfo: {
            bankCrad: "64784793273987924322",
            bankType: "长沙天心区建设银行",
            bankCity: "长沙"
          }
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    handleEdit() {
      this.dialogFormVisible = true;
    }
  },
  mounted() {
    request
      .apiGet("/option/role", { token: localStorage.getItem("token") })
      .then(res => {
        console.log(res);
      });
  }
};
</script>

<style scoped>
  #edit .el-input{
    width: 300px;
  }
   #edit .el-select{
     width: 300px;
   }
</style>
