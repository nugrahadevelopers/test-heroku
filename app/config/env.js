const env = {
  database: 'dbmd3phjs1g5f3',
  username: 'racgzjvofhalrh',
  password: '5fcf7e34df38db8b35a05142e1a42448a3310a8749a100ef206904915fbc85bf',
  host: 'ec2-52-5-247-46.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;