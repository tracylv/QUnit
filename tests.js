function addTest(a,b)
{
    return a + b;
}



QUnit.test( "hello test", function( assert ) {
	assert.ok( 1 == "1", "Passed!" );
	assert.strictEqual(1, "1", "strict equal");
});

QUnit.test( "a test", function( assert ) {
	assert.equal( 1, "1", "String '1' and number 1 have the same value" );
});

QUnit.test( "equal test", function( assert ) {
	assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
	assert.equal( "", 0, "Empty, Zero; equal succeeds" );
	assert.equal( "", "", "Empty, Empty; equal succeeds" );
	assert.equal( "three", 3, "Three, 3; equal fails" );
	assert.equal( null, false, "null, false; equal fails" );
});

QUnit.test( "addTest", function( assert ) {
	assert.equal( addTest(1,2), 3, "1 + 2 = 3" );
	assert.equal( addTest(1,"2"), 3, "1 + 2 = 3" );
	assert.equal( addTest("1", "2"), 3, "1 + 2 = 3" );
});