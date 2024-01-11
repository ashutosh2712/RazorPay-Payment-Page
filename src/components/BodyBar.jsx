import React from "react";
import DownArrow from "../assets/downArrow.png";
import SearchOrder from "../assets/searchOrder.png";
import Sort from "../assets/sort.png";
import Download from "../assets/download.png";
import Info from "../assets/i-icon.png";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";
const BodyBar = () => {
  return (
    <div className="bodyContainer">
      <div className="bodyStart">
        <div className="overviewContainer">
          <div className="overviewText">
            <p className="overview">Overview</p>
          </div>
          <div className="lastMonthContainer">
            <p className="lastMonth">Last Month</p>
            <img src={DownArrow} alt="" />
          </div>
        </div>
        <div className="razorPayContainer">
          <div className="razorPayText">
            <p className="razorPay">Razorpay</p>
          </div>
          <div className="cashFreeText">
            <p className="cashFree">Cashfree</p>
          </div>
        </div>
        <div className="divider">
          <div className="selectedDivider"></div>
          <div className="dividerlargeLine"></div>
        </div>
        <div className="ordersContainer">
          <div className="orderText">
            <p className="orders">Total Orders</p>
            <p className="ordersValue">231</p>
          </div>
          <div className="amountText">
            <p className="amountRecieved">Amount Recieved</p>
            <p className="amountRecievedValue">&#8377; 23,92,312.19</p>
          </div>
        </div>
      </div>

      <div className="bodyEnd">
        <p className="transactionText">Transactions | This Month</p>
        <div className="orderTable">
          <div className="searchSort">
            <div className="searchTable">
              <img src={SearchOrder} alt="" />
              <input
                type="text"
                placeholder="Search by order ID..."
                className="searchOrder"
              />
            </div>
            <div className="endSearch">
              <div className="sortContainer">
                <p className="sort">Sort</p>
                <img src={Sort} alt="" />
              </div>
              <div className="dowloadContainer">
                <img src={Download} alt="" />
              </div>
            </div>
          </div>

          <table>
            <tr>
              <th>Order ID</th>
              <th className="orderDateAmount">
                Order date<i class="fa fa-caret-down"></i>
              </th>
              <th>Order amount</th>
              <th className="transactionAmount">
                Transaction fees
                <img src={Info} alt="" />
              </th>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
            <tr>
              <td>#281209</td>
              <td>7 July,2023</td>
              <td>&#8377;1,278.23</td>
              <td>&#8377;22</td>
            </tr>
          </table>
          <div className="paginationContainer">
            <div className="paginationWrapper">
              <div className="previous">
                <img src={LeftArrow} alt="" />
                <p className="previousText">Previous</p>
              </div>
              <div className="pageNumber">
                <span className="pagingBox">1</span>
                <span className="pagingBox">...</span>
                <span className="ten">10</span>
                <span className="pagingBox">11</span>
                <span className="pagingBox">12</span>
                <span className="pagingBox">13</span>
                <span className="pagingBox">14</span>
                <span className="pagingBox">15</span>
                <span className="pagingBox">16</span>
                <span className="pagingBox">17</span>
                <span className="pagingBox">18</span>
              </div>
              <div className="next">
                <p className="nextText">Next</p>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBar;
