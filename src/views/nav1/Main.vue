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
      </el-form>
    </el-col>
    <!--表格-->
    <el-table :data="users" highlight-current-row border style="width: 100%;">
      <!-- <el-table-column type="selection" width="45"></el-table-column> -->
      <el-table-column prop="name" label="客户姓名" sortable></el-table-column>
      <el-table-column prop="phone" label="电话" :formatter="formatSex" sortable></el-table-column>
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
          <el-button size="small" @click="bindRoles(scope.$index, scope.row)" style="flex:1">绑定角色</el-button>
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            style="flex:1"
          >编辑</el-button>
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
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        style="float:right;"
      ></el-pagination>
    </el-col>
  </section>
</template>

<script>
import { request } from '../../api/api'
export default {
  data() {
    return {
      users: [
        {
          name: '周星星',
          phone: '18566666666',
          idCrad: '4304361881818188881888',
          email: '749106188@qq.com',
          bankInfo: {
            bankCrad: '64784793273987924322',
            bankType: '长沙天心区建设银行',
            bankCity: '长沙'
          }
        }
      ]
    }
  },
  mounted() {
    request
      .apiGet('/option/role', { token: localStorage.getItem('token') })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>
</style>